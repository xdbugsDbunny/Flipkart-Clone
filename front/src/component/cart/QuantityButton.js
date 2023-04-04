
import {Box,ButtonGroup, Button, styled} from '@mui/material'

const GroupButton = styled(ButtonGroup)`
    margin-top: 30px;
`
const StyledButton= styled(Button)`
    border-radius:50%;
`
const QuantityButton = () =>{
    return(
        <GroupButton>
            <StyledButton>-</StyledButton>
            <Button disabled>1</Button>
            <StyledButton>+</StyledButton>
        </GroupButton>
    )
}

export default QuantityButton;