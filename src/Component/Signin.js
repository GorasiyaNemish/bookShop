import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { useFormik } from 'formik';
import * as yup from 'yup';



const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Signin = () => {
  const formik = useFormik({
    initialValues: {name: '',email: '',
    password: '',
  },
  validationSchema: validationSchema,
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
  },
});

return (
  <div className="App">
  <Paper elevation={3} sx={{height: "80vh",margin: "5vh 20%",display:"flex", alignItems : "center", justifyContent:"center"}}>
    <form onSubmit={formik.handleSubmit} >
    <br />
    <Typography variant="h5">Login Form</Typography>
    <br />
    <br />
    <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          style={{ width: "400px", margin: "5px" }}
        />
        <br />
        <br />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          style={{ width: "400px", margin: "5px" }}
        />
        <br />
        <br />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          style={{ width: "400px", margin: "5px" }}
        />
        <br />
        <br />
        <Button color="primary" variant="contained"  type="submit">
          Submit
        </Button>
      </form>
      
      </Paper>
    </div>
  );};

  export default Signin;