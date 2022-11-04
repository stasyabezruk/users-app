import { fireEvent, render, screen } from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils';
import Input from '.';

const renderInput = ({ placeholder = '', searchTerm = '', handleChange = () => {} } = {}) => {
  render(<Input placeholder={placeholder} value={searchTerm} handleChange={handleChange} />);
  const inputEl = screen.getByTestId('input');
  return { inputEl };
};
describe('<Input />', () => {
  it('should render component with placeholder', () => {
    const placeholder = 'placeholderVal';
    const { inputEl } = renderInput({ placeholder });
    expect(inputEl.placeholder).toEqual(placeholder);
  });

  it('should render component with text', () => {
    const text = 'text';
    const { inputEl } = renderInput({ searchTerm: text });
    expect(inputEl).toHaveValue(text);
  });

  it('should invoke change handler', async () => {
    const onChange = jest.fn();
    const { inputEl } = renderInput({ handleChange: onChange });
    expect(inputEl.value).toBe('');
    fireEvent.change(inputEl, {
      target: { value: 'black' }
    });
    await wait(() => expect(onChange).toHaveBeenCalledTimes(1));
    await wait(() => expect(inputEl.value).toBe('black'));
  });
});
