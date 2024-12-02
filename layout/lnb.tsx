import axios from "axios"
import { useEffect, useState } from "react"

interface lnbMenu {
  menuName: string,
  id: string,
  isCurrent: boolean,
}

export default function Lnb() {
  const [lnbList, setLnblist] = useState<lnbMenu[]>([]);
  useEffect(() => {
    axios.get('http://localhost:3001/menu')
    .then(result => {
      setLnblist(result.data);
    })
  }, [])
  
  return (
    <nav>
      <ul>
        {lnbList.map(lnb => (
          <li key={lnb.id}>{lnb.menuName}</li>
        ))}
      </ul>
    </nav>
  )
}