window.onload = function()
{
    const calculator = document.querySelector('.calculator')
    const keys = calculator.querySelector('.calculator__keys')
    const display = calculator.querySelector('.calculator__display')


    keys.addEventListener('click', function(e)
    {
        if(e.target.matches('button'))
        {
            const key = e.target
            const action = key.dataset.action
            const keyContent = key.textContent
            const displayedNum = display.textContent
            const previousKeyType = calculator.dataset.previousKeyType

            // Remove .is-depressed class from all keys
            Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'))


            if(!action)
            {
                if(displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate')
                {
                    display.textContent = keyContent
                }
                else
                {
                    display.textContent = displayedNum + keyContent
                }
                calculator.dataset.previousKeyType = 'number'
            }

            if(action === 'decimal')
            {
                if(!displayedNum.includes('.'))
                {
                    display.textContent = displayedNum + '.'
                }
                else if (previousKeyType === 'operator' || previousKeyType === 'calculate')
                {
                    display.textContent = '0.'
                }
                
                calculator.dataset.previousKeyType = 'decimal'
            }
            if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide')
            {
                
                const firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                const secondValue = displayedNum
                if(firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate')
                {
                    const calcValue = calculate(firstValue, operator, secondValue)
                    display.textContent = calcValue
                    calculator.dataset.firstValue = calcValue
                }
                else
                {
                    calculator.dataset.firstValue = displayedNum
                }

                key.classList.add('is-depressed')
                    // Add custom attribute
                    calculator.dataset.previousKeyType = 'operator'
                    calculator.dataset.operator = action
                
            
            }
            
            if(action === 'clear')
            {
                if(key.textContent === 'AC')
                {
                    calculator.dataset.firstValue = ''
                    calculator.dataset.operator = ''
                    calculator.dataset.modValue = ''
                    calculator.dataset.previousKeyType = ''
                }
                else
                {
                key.textContent = 'AC'
                }
                display.textContent = 0
                    calculator.dataset.previousKeyType = 'clear'
            }


            if(action !== 'clear')
            {
                const clearButton = calculator.querySelector('[data-action=clear]')
                clearButton.textContent = 'CE'
            }

            if(action === 'calculate')
            {
                const firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                const secondValue = displayedNum
                const modValue = calculator.dataset.modValue

                if(firstValue)
                {
                    if(previousKeyType === 'calculate')
                    {
                        firstValue = displayedNum
                    }
                    
                    display.textContent = calculate(firstValue, operator, secondValue)
                }

                //calculator.dataset.previousKeyType = 'calculate'
                modValue = secondValue
                calculator.dataset.previousKeyType = 'calculate'
               
            }
        }

    })
    
    const calculate = (n1, operator, n2) => {
        let result = ''

        if(operator === 'add')
        {
            result = parseFloat(n1) + parseFloat(n2)
        }
        if (operator === 'subtract')
        {
            result = parseFloat(n1) - parseFloat(n2)
        }
        if (operator === 'multiply')
        {
            result = parseFloat(n1) * parseFloat(n2)
        }
        if (operator === 'divide')
        {
            result = parseFloat(n1) / parseFloat(n2)
        }

        return result
    }



}