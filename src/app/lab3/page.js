import React from 'react'

function ContactCard({ name, phone, email, avatar }) {
  return <div>
    <div>
      tên:{name}
    </div>
    <div>
      số điện thoại:{phone}
    </div>
    <div>
      email:{email}
    </div>
    <div>
      ảnh đại diện:<img src={avatar} />
    </div>
  </div>
}

function ContactList({ contactList }) {
  return contactList.map((contact, index) => {
    return <div key={index}>
      <ContactCard
        name={contact.name}
        phone={contact.phone}
        email={contact.email}
        avatar={contact.avatar}
      />
    </div>
  })
}

function Lab3() {

  const contactList = [
    {
      name: "Thien",
      phone: "90893213",
      email: "minhthien@gmail.com",
      avatar: "https://picsum.photos/200/300",
    },
    {
      name: "Thien 11",
      phone: "90893213213",
      email: "minhthien1@gmail.com",
      avatar: "https://picsum.photos/200/300",
    }
  ]

  return (
    <div>
      <ContactList contactList={contactList} />
    </div>

  )
}

export default Lab3