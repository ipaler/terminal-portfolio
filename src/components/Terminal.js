import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { executeCommand } from '../utils/commands';

const TerminalContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 600px;
  background-color: #282a36;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #44475a;
`;

const TerminalButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${props => props.color};
`;

const TerminalTitle = styled.div`
  margin-left: 10px;
  font-size: 14px;
  color: #bd93f9;
`;

const TerminalBody = styled.div`
  flex: 1;
  overflow-y: auto;
  font-size: 16px;
  line-height: 1.5;
  padding-right: 10px;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #282a36;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #44475a;
    border-radius: 4px;
  }
`;

const Line = styled.div`
  margin-bottom: 8px;
`;

const Prompt = styled.span`
  color: #50fa7b;
  margin-right: 10px;
`;

const Command = styled.span`
  color: #f8f8f2;
`;

const Output = styled.div`
  color: ${props => props.color || '#f8f8f2'};
  margin-top: 5px;
  margin-bottom: 15px;
  white-space: pre-wrap;
`;

const InputLine = styled.div`
  display: flex;
  margin-top: 5px;
`;

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: #f8f8f2;
  font-family: 'Fira Code', monospace;
  font-size: 16px;
  outline: none;
  caret-color: #f8f8f2;
`;

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [prompt, setPrompt] = useState('visitor@portfolio:~$');
  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  // 初始欢迎消息
  useEffect(() => {
    const welcomeMessage = [
      {
        type: 'output',
        content: `欢迎来到我的个人主页！\n\n输入 'help' 查看可用命令。`,
        color: '#8be9fd'
      }
    ];
    setHistory(welcomeMessage);
  }, []);

  // 自动滚动到底部
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  // 自动聚焦输入框
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim();
      
      // 添加命令到历史记录
      const newHistory = [...history, {
        type: 'command',
        prompt,
        content: command
      }];
      
      // 执行命令并获取输出
      const output = executeCommand(command);
      
      // 处理清除屏幕命令
      if (output.content === 'CLEAR_TERMINAL') {
        setHistory([]);
        setInput('');
        return;
      }
      
      // 添加输出到历史记录
      newHistory.push({
        type: 'output',
        content: output.content,
        color: output.color
      });
      
      setHistory(newHistory);
      setInput('');
    }
  };

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <TerminalContainer onClick={handleClick}>
      <TerminalHeader>
        <TerminalButton color="#ff5f56" />
        <TerminalButton color="#ffbd2e" />
        <TerminalButton color="#27c93f" />
        <TerminalTitle>terminal - portfolio</TerminalTitle>
      </TerminalHeader>
      
      <TerminalBody ref={terminalBodyRef}>
        {history.map((item, index) => {
          if (item.type === 'command') {
            return (
              <Line key={index}>
                <Prompt>{item.prompt}</Prompt>
                <Command>{item.content}</Command>
              </Line>
            );
          } else {
            return (
              <Output key={index} color={item.color}>
                {item.content}
              </Output>
            );
          }
        })}
        
        <InputLine>
          <Prompt>{prompt}</Prompt>
          <Input 
            ref={inputRef}
            type="text" 
            value={input} 
            onChange={handleInputChange} 
            onKeyDown={handleKeyDown} 
            autoFocus 
          />
        </InputLine>
      </TerminalBody>
    </TerminalContainer>
  );
};

export default Terminal;