import React from 'react'

const obj = {
  name: "Name",
  age: 10,
  tatoo: true// false
}

function SinhVien({ name, age, classname, tatoo }) {
  return <div>
    ten:  {name}
    <br />
    tuoi: {age}
    <br />
    lop: {classname}
    <br />
    {
      tatoo ? <div> tatoo: {tatoo}</div> : ""
    }

    <hr className='border-2' />

  </div>
}
function ProductList() {

  const dsSinhVien = [{
    name: "Nam",
    age: 10,
    classname: "lop vss01",
    tatoo: "co"
  },
  {
    name: "Luat",
    age: 11,
    classname: "lop vss01",
    tatoo: "co"
  },
  {
    name: "Tai",
    age: 13,
    classname: "lop vss01",
    tatoo: "ko"
  }
  ]

  console.log(dsSinhVien)

  return (
    <div>
      {dsSinhVien.map((sinhVien, i) => {
        return <div key={i}>
          index{i}
          <SinhVien
            name={sinhVien.name}
            age={sinhVien.age}
            classname={sinhVien.classname}
            tatoo={sinhVien.tatoo} />
        </div>
      })}

      {1 + 1}
    </div>
  )
}

export default ProductList