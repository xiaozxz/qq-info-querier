import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { QQQuerier } from './';

describe('QQQuerier component test', () => {
  render(<QQQuerier />);
  const input: HTMLInputElement = screen.getByPlaceholderText('输入后查询');

  it('start query by input change', async () => {
    const inputEvent = {
      target: {
        value: '1057455814',
      },
    };
    // query qq
    fireEvent.change(input, inputEvent);
    expect(input.value).toEqual(inputEvent.target.value);
    await screen.findByText('查询中');
    let el = await screen.findByText('啸跃');
    expect(el).toBeInTheDocument();
    // clear
    let ele = screen.getByTitle('清空输入');
    fireEvent.click(ele);
    expect(input.value).toEqual('');
  });
});
