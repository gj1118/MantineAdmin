import {Paper} from "@mantine/core"

const  PaperWrapper = ({children, ...props}) => {
     return (
       <Paper radius={0} style={{ backgroundColor: 'transparent' }}>
         {children}
       </Paper>
     )
}

export default PaperWrapper