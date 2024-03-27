import { Link, Typography } from "@mui/material";
import  Avatar  from "@mui/material/Avatar"
import Stack from '@mui/material/Stack';
import { Abstract } from "./Abstract";

const ImgUrl = "https://avatars.githubusercontent.com/u/93694381?s=400&u=6898c01a296ebc25285ddf71955dc93aaf41efe5&v=4"

export const ProfileAvater = () => {
  return (
    <Stack direction='column' alignItems='center'>
        <Abstract txt="Profile"/>
        <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src={ImgUrl} sx={{ width: 150, height: 150 }} 
            />
            <Stack direction="column" spacing={1}>
                <Typography variant="h5">氏名 佐藤 匠</Typography>
                <Typography variant="body1">日本大学 情報科</Typography>
                <Typography variant="body1">生年月日 2002/9/24</Typography>
                <Typography variant="body1">email takumingo924@icloud.com</Typography>
                <Stack direction="row" spacing={2}>
                    <Typography variant="body1">Github</Typography>
                    <Link href="https://github.com/takumi92442" underline="none" >
                    takumi92442
                    </Link>
                </Stack>
            </Stack>
        </Stack>
        
    </Stack>
  )
}
