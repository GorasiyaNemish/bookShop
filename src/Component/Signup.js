import {Form, Formik ,formik} from 'formik';
import React from 'react';
import { Grid, Button, TextField } from '@mui/material';

const Signup = () => {
  return (
    <>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"Column",padding:"10vh"}}>
      <h1>Sign Up Here</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({values,handleChange})=>(
          <Form style={{ padding: "80px 20%", display: "flex", flexDirection: "column", width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField name="firstName" type="text" label="First Name" fullWidth value={values.firstName} onChange={handleChange}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField name="lastName" type="text" label="Last Name" fullWidth value={values.lastName} onChange={handleChange} />
            </Grid>
            <Grid item sm={12}>
              <TextField name="email" type="text" label="Email" fullWidth value={values.email} onChange={handleChange} />
            </Grid>
            <Grid item sm={12}>
              <TextField name="password" type="password" label="Password" fullWidth value={values.password} onChange={handleChange} />
            </Grid>
          </Grid>
          <Button type="submit" color="primary" variant='contained' sx={{my:3}}>Submit</Button>
        </Form>
        )}
        
      </Formik>
      </div>
    </>
  )
}

export default Signup;
