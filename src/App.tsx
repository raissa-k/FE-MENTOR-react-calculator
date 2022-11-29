import { useState } from 'react'
import GlobalStyle1 from './assets/Styles/theme1'
import GlobalStyle2 from './assets/Styles/theme2'
import GlobalStyle3 from './assets/Styles/theme3'

import { Button, ButtonContainer, Container, Header, Output, Switch, SwitchContainer, SwitchToggle, SwitchWrapper } from './App.style'
import { CalculatorDigitButton } from './CalculatorDigitButton'
import { CalculatorOperatorButton } from './CalculatorOperatorButton'

function App() {
	const [currentValue, setCurrentValue] = useState("0")
	const [operation, setOperation] = useState("")
	const [theme, setTheme] = useState(1)
	const [leftAlign, setLeftAlign] = useState("10%")
	const [previousValue, setPreviousValue] = useState("")
	const [overwrite, setOvewrite] = useState(true)

	const reset = () => {
		setPreviousValue("")
		setOperation("")
		setCurrentValue("0")
		setOvewrite(true)
	}

	const delNumber = () => {
		setCurrentValue("0")
		setOvewrite(true)
	}

	const setDigit = (digit: string) => {
		if (currentValue[0] === "0" && digit === "0") return
		if (currentValue.includes(".") && digit === ".") return
		if (overwrite && digit != "."){
			setCurrentValue(digit)
		} else {
			setCurrentValue(`${currentValue}${digit}`)
		}
		setOvewrite(false) 
	}

	const selectOperation = (operation: string) => {
		if (previousValue){
			const value = calculate()
			setCurrentValue(`${value}`)
			setPreviousValue(`${value}`)
		} else {
			setPreviousValue(currentValue)
		}
		setOperation(operation)
		setOvewrite(true)
	}

	const calculate = () => {
		if(!previousValue || !operation) return currentValue

		const current = parseFloat(currentValue)
		const previous = parseFloat(previousValue)

		let result;
		switch(operation){
			case "+":
				result = previous + current
				break;
			case "-":
				result = previous - current
				break;
			case "/":
				result = previous / current
				break;
			case "*":
				result = previous * current
				break;
		}
		return result
	}

	const equals = () => {
		const value = calculate()
		setCurrentValue(`${value}`)
		setPreviousValue("")
		setOperation("")
		setOvewrite(true)
	}

	const handleThemeChange = () => {
		if (theme == 1) {
			setTheme(2)
			setLeftAlign("40%")
		} else if (theme == 2) {
			setTheme(3)
			setLeftAlign("70%")
		} else {
			setTheme(1)
			setLeftAlign("10%")
		}
	}

	return (
		<>
		{ theme === 1 ? <GlobalStyle1 /> : theme === 2 ? <GlobalStyle2 /> : <GlobalStyle3 />}
		<Container>
			<Header>
				<span>Calculator</span>
				<SwitchWrapper>
					<span>Theme</span>
					<Switch onClick={handleThemeChange}>
						<button type={"button"}>
							<span className='sr-only'>Click to toggle theme</span>
							<span aria-hidden="true">1</span>
							<span aria-hidden="true">2</span>
							<span aria-hidden="true">3</span>
						</button>
					<SwitchContainer>
						<SwitchToggle leftAlign={leftAlign} />
					</SwitchContainer>
					</Switch>
				</SwitchWrapper>
			</Header>
			<Output>{currentValue}</Output>

			<ButtonContainer aria-label='Calculator buttons'>
				<CalculatorDigitButton 
				aria-label='Input 7' digit='7' enterDigit={setDigit}/>
				
				<CalculatorDigitButton 
				aria-label='Input 8' digit='8' enterDigit={setDigit}/>
				
				<CalculatorDigitButton 
				aria-label='Input 9' digit='9' enterDigit={setDigit}/>
				
				<CalculatorOperatorButton 
				aria-label='Delete' operation='DEL' selectOperation={delNumber}/>
				
				<CalculatorDigitButton 
				aria-label='Input 4' digit='4' enterDigit={setDigit}/>
				
				<CalculatorDigitButton 
				aria-label='Input 5' digit='5' enterDigit={setDigit}/>
				
				<CalculatorDigitButton 
				aria-label='Input 6' digit='6' enterDigit={setDigit}/>
				
				<CalculatorOperatorButton 
				aria-label='Add' operation='+' selectOperation={selectOperation}/>
				
				<CalculatorDigitButton 
				aria-label='Input 1' digit='1' enterDigit={setDigit}/>
				
				<CalculatorDigitButton 
				aria-label='Input 2' digit='2' enterDigit={setDigit}/>
				
				<CalculatorDigitButton 
				aria-label='Input 3' digit='3' enterDigit={setDigit}/>
				
				<CalculatorOperatorButton 
				aria-label='Subtract' operation='-' selectOperation={selectOperation}/>
				
				<CalculatorDigitButton 
				aria-label='Add dot for decimal' digit='.' enterDigit={setDigit}/>
				
				<CalculatorDigitButton 
				aria-label='Input 0' digit='0' enterDigit={setDigit}/>
				
				<CalculatorOperatorButton 
				aria-label='Divide' operation='/' selectOperation={selectOperation}/>
				
				<CalculatorOperatorButton 
				aria-label='Multiply' operation='*' selectOperation={selectOperation}/>
				
				<CalculatorOperatorButton 
					gc="1/3"
					color="var(--white)"
					bg="var(--key-background-dark-blue)"
					bdbox="var(--key-shadow-dark-blue)"
					aria-label='Reset' operation='RESET' selectOperation={reset}/>
				
				<Button 
					gc="3/5"
					color="var(--white)"
					bg="var(--key-background-red)"
					bdbox="var(--key-shadow-dark-red)"
					aria-label='Calculate'
					onClick={equals}>=</Button>
			</ButtonContainer>
		</Container>
		</>
	)
}

export default App
