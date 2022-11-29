import { Button } from "./App.style";

interface CalculatorDigitButton {
	digit: string;
	enterDigit: (digit: string) => void;
}

export const CalculatorDigitButton: React.FC<CalculatorDigitButton> = ({
	digit, 
	enterDigit
}) => {
	return <Button onClick={() => enterDigit(digit)}>
		{digit}
	</Button>
}