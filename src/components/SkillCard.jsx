import { Card, CardContent, Typography } from "@mui/material"
import Stack from '@mui/material/Stack';


export const SkillCard = (props) => {
  const{icon,description,name} = props
  return (
    <>
    <Card sx={{ width: 300, height: 300, margin: 2 }} >
      <CardContent>
      <Stack direction="column" spacing={1}>
        <Typography variant="h5">{name}</Typography>
        <Stack direction="row" spacing={2}>
          {icon}
          <Typography variant="body1" whiteSpace='pre-line'>{description}</Typography>
        </Stack>
      </Stack>
      </CardContent>
    </Card>
    </>
  )
}
