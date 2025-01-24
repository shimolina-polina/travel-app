import { Box, Grid2, Link, Typography } from "@mui/material";
import React from "react";
import { blogPosts } from "../../data/blogPosts";
import BlogCard from "../molecules/BlogCard";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Blog = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingX: '70px', paddingTop: '70px'}}>
            <Box sx={{maxWidth: 1500, width: '100%'}}>
                <Link href="#" underline="none" color="inherit">
                    <Box sx={{display: 'flex', marginTop: 0, marginBottom: 5, marginX: '5vw', alignItems: 'center'}}>
                            <Typography variant="h4">Наш блог о путешествиях</Typography>
                            <ArrowForwardIosIcon/>
                    </Box>
                </Link>
                
                <Grid2 container spacing={5} sx={{marginX: '5vw'}}>
                    {blogPosts.slice(0, 3).map((post) => (
                        <Grid2 size={{xs: 12, sm: 6, md: 4}}key={post.id}>
                            <BlogCard post={post} />
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </Box>
    )
}

export default Blog;