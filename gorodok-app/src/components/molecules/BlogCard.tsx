import { Box, Card, CardActionArea, CardContent, Chip, Typography } from "@mui/material"
import React, { FC } from "react"
import { styled } from '@mui/material/styles';
import { IBlogCardProps } from "../../interfaces/molecules/BlogCard/IBlogCardProps";

const StyledCardActionArea = styled(CardActionArea)(({ }) => ({
    '& .MuiCardActionArea-focusHighlight': {
      backgroundColor: 'transparent',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
  }));

  
const BlogCard: FC<IBlogCardProps> = ({post}) => {

    return (
        <Card elevation={0} sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: "inherit", borderRadius: 0}} >
            <StyledCardActionArea 
                sx={{ flexGrow: 1 }}
                
                onClick={()=>{console.log(`card`)}}
            >
                <CardContent sx={{ padding: 0, marginTop: 0 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {post.content}
                    </Typography>
                    <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {post.tags?.map((tag: string) => (
                            <Chip key={tag} label={tag}/>
                        ))}
                    </Box>
                </CardContent>
            </StyledCardActionArea>  
        </Card>
    )
}

export default BlogCard;
