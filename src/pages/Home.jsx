import { useState, useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import styles from './Home.module.css'

function Home() {
  const [count, setCount]=useState(0)
  const [text, setText]=useState('')
  const [fgColor, setFgColor]=useState('#000000')
  const [history, setHistory]=useState(()=>{
    const saved=localStorage.getItem('qr_history')
    return saved ? JSON.parse(saved):[]
  })
  const qrRef=useRef(null)

  //Descargar codigo como PNG
  const downloadCode=(e)=>{
    e.preventDefault()
    if(!text) return alert("Debe agregar texto primero:(")
    
    const canvas=qrRef.current.querySelector('canvas')
    if (canvas){
      const url=canvas.toDataURL('image/png')
      //localStorage
      const newItem={
        id: Date.now(),
        text: text,
        color: fgColor,
        date: new Date().toLocaleDateString()
      }
      //El nuevo elemento se guarda en la lista
      const updatedHistory=[newItem, ...history]
      setHistory(updatedHistory)
      //Se guarda en el storage
      localStorage.setItem('qr_history', JSON.stringify(updatedHistory))
      const link=document.createElement('a')
      link.href=url
      link.download=`qrcode-${Date.now()}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
  
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero} id="inicio">
        <h1 className={styles.heroTitle}>
          Bienvenido a <span className={styles.highlight}>Generador de QR</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Introduce una url o un texto para generar tu codigo.
        </p>

        {/* Generador de QRs */}
        <div className={styles.homeContainer}>
          <form onSubmit={downloadCode} className={styles.qrForm}>
            <input type="text"
              placeholder='Ingrese un texto o url aqui...'
              value={text}
              onChange={(e)=>setText(e.target.value)}
              className={styles.qrInput}
            />
            {/* Contenedor del QR */}
            <div className={styles.qrResult} ref={qrRef}>
              {text ? (
                <QRCodeCanvas
                value={text}
                size={256}
                bgColor='#ffffff'
                fgColor={fgColor}
                level='H'//Alta capacidad para correccion de errores
                includeMargin={true}
                />
              ):(
                <div className={styles.qrPlaceholder}>
                  El QR aparecera aqui!
                </div>
              )}
            </div>
            {/* El botón cambia dependiendo si hay texto o no */}
            <button type="submit" className={styles.qrButton} disabled={!text}>
              Descargar QR en PNG
            </button>
          </form>
        </div>

        {/* Paleta de colores*/}
        <div className={styles.color}>
          <p className={styles.colorLabel}>Personalizar colores</p>
          <div className={styles.colorControls}>
            <input type="color"
              value={fgColor}
              onChange={(e)=>setFgColor(e.target.value)}
              className={styles.colorPicker}
            />
          </div>
          <button className={styles.btnReset} onClick={() => setFgColor('#000000')}>
            Restablecer
          </button>
        </div>
      </section>

      {/* Cards de historial */}
      <section className={styles.cards} id="historial">
        <h2 className={styles.sectionTitle}>QRs anteriores</h2>
        {history.length===0 ? (
          <p style={{ textAlign: 'center', color: '#888' }}>Ningun QR generado</p>
        ):(
          <div className={styles.cardGrid}>
            {history.map((item)=>(
              <div key={item.id} className={styles.card}>
                <span className={styles.cardIcon}>QR</span>
                <h3 className={styles.cardTitle} style={{ wordBreak: 'break-all' }}>
                  {item.text}
                </h3>
                <p className={styles.cardDesc}>
                  Fecha: {item.date} <br />
                  Color: <span style={{ color: item.color, fontWeight: 'bold' }}>{item.color}</span>
                </p>
                <button 
                  className={styles.btnSecondary} 
                  style={{ marginTop: '10px', width: '100%', padding: '5px' }}
                  onClick={() => {
                    setText(item.text);
                    setFgColor(item.color);
                  }}
                >
                  Reutilizar
                </button>

                {history.length > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <button 
                      className={styles.btnReset} 
                      onClick={() => {
                        if(confirm("¿Seguro que quieres borrar todo el historial?")) {
                          setHistory([]);
                          localStorage.removeItem('qr_history');
                        }
                      }}
                    >
                      Limpiar Historial
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  )
}

export default Home
