import { Box, Container} from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    resumeButtom:{
        background:"#FE2500",
        fontSize: "1.2rem",
        boxShadow: 3,
        fontWeight: 500,
        py:1,px:3, borderRadius: 20,
        transition: ".4s",
        position: "revert",
        '&:hover': {
                    color:"#fff",
                    backgroundColor: '#CB0001',
                    transform: "scale(1.1)"
                    }
    },
    hiremeButtom:{
        border: "2px solid #fff",
        boxShadow: 3,
     fontSize: "1.2rem",
     fontWeight: 500,
     position: "revert",
     padding:"1px , 3px",
    borderRadius: 20,
     transition: ".4s",
     
     '&:hover': {
        border: "2px solid #fff",
        borderColor:"#fff",
         backgroundColor: '#161824',
         transform: "scale(1.1)"
    },
    hiremeAncor:{
        textDecoration:"none",
        color:"#fff",
    }
}})


const Slider = () => {
    const classes = useStyle();
    return (
        <Box>
        <Box  sx={{ bgcolor: '#1E2132', mt:"-10px" }}>
                <Container>  
                    <Grid container >

                    <Grid item xs={12} md={6} className={classes.imageArea}  sx={{ display:{xs:'flex',md:"none"} ,
                        justifyContent: 'space-around',
                        color:"#fff",
                        mt:6,
                        mb:4}}>
                            <Box  sx={{ width:{xs:"90%",sm:"70%"},height:{xs:"90%",sm:"85%"}}}>
                            <img
                            className={classes.sliderImageForLittle}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: " 50%",
                                    padding: 4,
                                    borderBottom: "2px solid #fff"
                                }} 
                                src="https://i.ibb.co/sH849xJ/hanif.jpg"
                                alt="" />
                            </Box>                   
                        </Grid>
                        <Grid item sx={{color:"#fff",textAlign:"center"}} xs={12} md={6}>
                        <Typography variant="h5" gutterBottom component="div" sx={{fontSize:"30px",mt:{xs:0,sm:22}}}>
                            Hello,I'M Hanif
                        </Typography>
                        <Typography variant="h4" gutterBottom component="div" sx={{pt:1}}>
                            MERN Stack Devloper
                        </Typography>
                        <Typography variant="body2" gutterBottom component="div" sx={{pt:1,pb:2}}>
                            Knack of building applications with front and back end operations
                        </Typography>
                        <Stack sx={{justifyContent:"center",mb:{xs:10,md:0} }} spacing={2} direction="row">
                            
                        
                            <Button href="https://drive.google.com/u/0/uc?id=1jQC4ny1KU-hYF2V97a_yrABWZKIZZKdJ&export=download"  className={classes.resumeButtom}  variant="contained"> 
                                Get Resume           
                            </Button>
                          
                            
                            <Button className={classes.hiremeButtom}
                            variant="outlined" to="#contactArea"> 
                            <a style={{textDecoration:"none",color:"#fff"}} href="#contactArea">Hire Me</a>
                            
                            </Button>
                              
                        </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{display:{xs:'none',md:"flex"},justifyContent: 'space-around',color:"#fff",mt:10,mb:8 }}>
                            <Box  sx={{ width:{xs:"90%",sm:"70%"},height:{xs:"90%",sm:"85%"}}}>
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: " 50%",
                                    padding: 4,
                                    borderBottom: "2px solid #fff"
                                }} 
                                src="https://i.ibb.co/sH849xJ/hanif.jpg"
                                alt="" />
                            </Box>                   
                        </Grid>
                    </Grid>
                    
                </Container>
                <img className='footerImg' style={{width:"100%",marginTop:"-80px",marginBottom:"-10px"}} src="https://i.ibb.co/db8JHYL/bestfooter.png" alt="" />
                
        </Box>
        </Box>
        
    );
};

export default Slider;