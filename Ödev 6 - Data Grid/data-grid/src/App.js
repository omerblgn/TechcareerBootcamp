import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products")
      .then(res => {
        setProducts(res.data)
      })
  }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'unitPrice', headerName: 'Unit Price', type: 'number', width: 100 },
    { field: 'unitsInStock', headerName: 'Units In Stock', type: 'number', width: 100 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Delete',
      width: 100,
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteRoundedIcon />}
            label='Delete'
            onClick={handleDeleteClick(id)}
          />
        ]
      }
    }
  ]

  const handleDeleteClick = (id) => () => {
    axios.delete("https://northwind.vercel.app/api/products/" + id)
      .then(res => {
        setProducts(products.filter((product) => product.id !== id));
      })
  };

  return (
    <div style={{ height: "100vh", padding: "1rem", boxSizing: "border-box" }}>
      <DataGrid
        columns={columns}
        rows={products}
        sx={{
          "& .bg-red": {
            backgroundColor: "red !important",
            color: "white !important"
          }
        }}
        getRowClassName={(params) => {
          if (params.row.unitsInStock === 0) {
            return "bg-red";
          }
        }}
      />
    </div>
  )
}

export default App