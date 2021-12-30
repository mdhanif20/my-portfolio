import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Card, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';


const useStyle = makeStyles({
    contactHeader:{
        paddingBottom: "5px",
        fontSize: "30px",
        fontWeight: 600
      },
      contactHeaderColor:{
        color:"#FE5200"
      },
      aboutImage:{
        padding:"10px"
      }
})

const About = () => {
    const classes = useStyle();
    return (
        <Container sx={{margin: "100px auto"}} id="contactArea">
                 
            <Box>
                <Card sx={{display:{xs:"grid",sm:"flex"}}}>
                        <Grid className={classes.aboutImage} xs={12} md={3}>
                          <img style={{width:"100%",borderRadius:"10px"}} src="https://i.ibb.co/sH849xJ/hanif.jpg" alt="" />
                          <Typography variant="button" sx={{textAlign:"center",fontSize:"20px"}} gutterBottom component="div">
                            Mohammad Hanif
                        </Typography>
                        </Grid>
                        <Grid sx={{p:2}} xs={12} md={8}>
                            <Typography className={classes.contactHeader} variant="button" gutterBottom component="div">
                                About <span className={classes.contactHeaderColor}>Me</span>
                            </Typography>
                            <Typography variant="subtitle2" sx={{fontSize:"16px"}} gutterBottom component="div">
                            <Typography sx={{marginBottom:"5px"}}>
                            Hi, 
                            </Typography>
                            I am Mohammad Hanif. I am from Dhaka. I am stadied at Bangabandhu Sheikh Mujibur Rahman Science And Technology University department of Food And Agro-process Engineering.
                            <Typography sx={{marginTop:"10px"}}>
                            I have completed my web development course from Programming Hero. I am expert in HTML5, CSS3, Bootstrap 5, JavaScript + ES6, React, React Router, React Bootstrap, Material Ui and comfortable with Node js, Express js, MongoDB, Tailwind CSS, Firebase.
                            </Typography>
                            <Typography sx={{marginTop:"10px"}}>
                            My short term goal is to be an expert web developer and my long term goal is to make an IT firm.
                            </Typography>
                           
                        </Typography>
                        </Grid>
                    
                </Card>
            </Box>
        </Container>
    );
};


export default About;