import { Button } from "./App.style";

interface CalculatorOperatorButton {
	operation: string;
	selectOperation: (operation: string) => void;
	color?: string;
  	bg?: string;
  	bdbox?: string;
  	gc?: string;
}

export const CalculatorOperatorButton: React.FC<CalculatorOperatorButton> = ({
	operation, 
	selectOperation,
	color,
	bg,
	bdbox,
	gc
}) => {
	return <Button onClick={() => selectOperation(operation)}
	color={color ?? "var(--white)"}
	bg={bg ?? "var(--key-background-dark-blue)"}
	bdbox={bdbox ?? "var(--key-shadow-dark-blue)"}
	gc={gc} 
	>
		{operation}
	</Button>
}