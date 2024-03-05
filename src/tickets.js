import {useEffect, useState} from "react";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState('');

  //TRAER TICKETS
  useEffect(() => {
    fetch('http://localhost:8000/tickets')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setTickets(data)
      })
  }, [])

  //FUNCIÓN PARA GUARDAR TICKET EN EL API
  const enviarTicket = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: title})
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        const nuevoArregloTickets = [...tickets, data];
        setTickets(nuevoArregloTickets);
      })
  }
  return (
    <form onSubmit={enviarTicket}>
      <p style={{color: 'red', fontWeight: 'bold'}}>Tickets form</p>
      <input name='title' value={title} onChange={e => setTitle(e.target.value)} />
      <button type='submit'>Submit</button>
      <section>
        {tickets.map(ticket => <p>{JSON.stringify(ticket)}</p>)}
      </section>
    </form>
  )
}

export default Tickets;
