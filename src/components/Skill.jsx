import { CLogo } from "../../public/CLogo"
import { Abstract } from "./Abstract"
import { SkillCard } from "./SkillCard"
import { ReactLogo } from "../../public/ReactLogo"
import { Grid } from "@mui/material"

const SKILLLIST = {
    C: {
        name: "C",
        icon: <CLogo width="300" height="300"/>,
        description:"42と大学で3年間学びました"
    },

    React: {
        name: "React",
        icon: <ReactLogo width="300" height="300"/>,
        description:`初学者\nこのポートフォリオをReactで作成しました\nAPI実装の経験あり\nデータベース連携の経験あり`
    }
    
}
    
export const Skill = () => {
  return (
    <>
    <Abstract txt="Skill"/>
    <Grid container spacing={2}>
      {Object.values(SKILLLIST).map((skill) => (
        <Grid item key={skill.name} xs={12} md={4} spacing={3}>
          <SkillCard {...skill} />
        </Grid>
      ))}
    </Grid>
    </>
  )
}
