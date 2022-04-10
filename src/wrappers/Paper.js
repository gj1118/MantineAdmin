import {Paper} from "@mantine/core"

const  PaperWrapper = ({children, ...props}) => {
     return (
       <Paper raadius={0} style={{ backgroundColor: 'transparent' }}>
         {children}
       </Paper>
     )
}

export default PaperWrapper