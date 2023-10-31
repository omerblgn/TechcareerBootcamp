import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Grid } from '@mui/material';
import axios from 'axios'

const AddProductSchema = Yup.object().shape({
  name: Yup.string().max(50, "Çok uzun").required("Boş bırakılamaz"),
  stock: Yup.number().required("Boş bırakılamaz"),
  unitPrice: Yup.number().required("Boş bırakılamaz"),
  quantityPerUnit: Yup.string().required("Boş bırakılamaz")
});

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      stock: "",
      unitPrice: "",
      quantityPerUnit: ""
    },
    validationSchema: AddProductSchema,
    onSubmit: (values) => {
      addProduct(values);
    },
  });

  const addProduct = (data) => {
    axios.post("https://northwind.vercel.app/api/products", data)
      .then(res => {
        alert("Product added");
        console.log(res.data)
      })
  }

  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "2em" }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              name="name"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {
              formik.errors.name ? <div style={{ color: "red" }}>{formik.errors.name}</div> : <></>
            }
          </div>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <div>
            <label htmlFor="stock">Stock</label>
            <br />
            <input
              name="stock"
              id="stock"
              onChange={formik.handleChange}
              value={formik.values.stock}
            />
            {
              formik.errors.stock ? <div style={{ color: "red" }}>{formik.errors.stock}</div> : <></>
            }
          </div>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <div>
            <label htmlFor="unitPrice">Unit Price</label>
            <br />
            <input
              name="unitPrice"
              id="unitPrice"
              onChange={formik.handleChange}
              value={formik.values.unitPrice}
            />
            {
              formik.errors.unitPrice ? <div style={{ color: "red" }}>{formik.errors.unitPrice}</div> : <></>
            }
          </div>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <div>
            <label htmlFor="quantityPerUnit">Quantity Per Unit</label>
            <br />
            <input
              name="quantityPerUnit"
              id="quantityPerUnit"
              onChange={formik.handleChange}
              value={formik.values.quantityPerUnit}
            />
            {
              formik.errors.quantityPerUnit ? <div style={{ color: "red" }}>{formik.errors.quantityPerUnit}</div> : <></>
            }
          </div>
        </Grid>

        <Grid item xs={12}>
          <div style={{ marginTop: "10px" }}>
            <Button type="submit" variant="contained">Add</Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}

export default App;
