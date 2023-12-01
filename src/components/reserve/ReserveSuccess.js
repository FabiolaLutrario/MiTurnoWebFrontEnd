"use client";
import React, { useEffect, useState } from "react";
import styles from "../../app/general.module.scss";
import Header from "../header/Header";
import Link from "next/link";
import { useSelector } from "react-redux";
import { turnServiceById } from "@/services/turn.service";
import { useParams } from "next/navigation";
const ReserveSuccess = () => {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [turn, setTurn] = useState({
    id: "",
    reservation_time: "",
    horary_id: "",
    branch_office: { name: "" },
  });
  useEffect(() => {
    turnServiceById(id).then((turn) => setTurn(turn));
  }, []);
  console.log(turn, id);

  return (
    <div className={styles.container}>
      <Header isPosition={"client"} isLoggedIn={true} />
      <div
        style={{
          width: "44rem",
          height: "29rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 7H36C38.7614 7 41 9.23858 41 12V36C41 38.7614 38.7614 41 36 41H12C9.23858 41 7 38.7614 7 36V12C7 9.23858 9.23858 7 12 7ZM4 12C4 7.58172 7.58172 4 12 4H36C40.4183 4 44 7.58172 44 12V36C44 40.4183 40.4183 44 36 44H12C7.58172 44 4 40.4183 4 36V12ZM32.7148 17.629L22.5 27.8438L16.7852 22.129C16.3947 21.7385 15.7615 21.7385 15.371 22.129L14.629 22.871C14.2385 23.2615 14.2385 23.8947 14.629 24.2852L21.4219 31.0781L21.8088 31.4482C22.1954 31.818 22.8046 31.818 23.1912 31.4482L23.5781 31.0781L34.871 19.7852C35.2615 19.3947 35.2615 18.7615 34.871 18.371L34.129 17.629C33.7385 17.2385 33.1053 17.2385 32.7148 17.629Z"
            fill="#CC6AFF"
          />
        </svg>
        <h1 style={{ color: "#a442f1" }}>¡Gracias por tu reserva!</h1>
        <p style={{ textAlign: "center" }}>
          En hasta 5 minutos, recibirás un correo electrónico en {user.email}{" "}
          con todos los detalles de tu reserva. Recordá revisar tu buzón de
          correo no deseado o promociones.
        </p>
        <button className={styles.button}>
          ¿Quéres imprimir tu comprobante?
        </button>
      </div>
      <hr
        style={{ width: "83.1%", margin: "-28px 0 3rem 0", color: "#c6c6c6" }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          paddingBottom: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginLeft: "10rem",
            gap: "2rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                gap: "1rem",
              }}
            >
              <h1>Reserva</h1>
              <h1 style={{ color: "#a442f1" }}>#{turn.id}</h1>
            </div>
            <p>
              Tramitada el {turn.reservation_date} a las{" "}
              {turn.reservation_time.slice(0, 5)} para el {turn.turn_date} a las{" "}
              {turn.horary_id.slice(0, 5)} hs.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              gap: "3rem",
            }}
          >
            <div>
              <h3>Cliente</h3>
              <h2>Nombre: {turn.full_name}</h2>
              <h2>Mail: {user.email}</h2>
              <h2>Teléfono: {turn.phone_number}</h2>
            </div>
            <div>
              <h3>Reserva</h3>
              <h2>Sucursal: {turn.branch_office.name}</h2>
              <h2>Día: {turn.turn_date}</h2>
              <h2>Horario: {turn.horary_id.slice(0, 5)}</h2>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            alignItems: "flex-end",
            justifyContent: "center",
            marginRight: "10rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "3px",
              color: "#A442F1",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M13.6248 1.875C10.8561 1.875 8.62478 4.1063 8.62478 6.875C8.62478 7.02158 8.64791 7.22054 8.66384 7.40234L3.31228 12.7539C2.0821 13.9841 2.0821 15.9573 3.31228 17.1875C4.54246 18.4177 6.5157 18.4177 7.74588 17.1875L13.0974 11.8359C13.2792 11.8519 13.4782 11.875 13.6248 11.875C16.3935 11.875 18.6248 9.6437 18.6248 6.875C18.6248 6.02083 18.4048 5.22902 18.0388 4.57031C17.844 4.2099 17.352 4.14389 17.0623 4.43359L14.367 7.10938L13.3904 6.13281L16.0662 3.4375C16.3559 3.1478 16.2899 2.65576 15.9295 2.46094C15.2708 2.09499 14.4789 1.875 13.6248 1.875ZM13.6248 3.125C13.9285 3.125 14.1549 3.25535 14.4256 3.32031L12.0623 5.68359L12.0526 5.69325C11.8115 5.93442 11.8158 6.32675 12.0623 6.5625L13.9373 8.4375C14.173 8.68397 14.5654 8.68832 14.8065 8.44716L14.8162 8.4375L17.1795 6.07422C17.2444 6.34485 17.3748 6.57129 17.3748 6.875C17.3748 8.9813 15.7311 10.625 13.6248 10.625C13.3748 10.625 13.1742 10.6247 13.0193 10.5859L12.6873 10.4883L12.4334 10.7422L6.86697 16.3086C6.09715 17.0784 4.96101 17.0784 4.19119 16.3086L4.17166 16.2891C3.42191 15.5196 3.4281 14.3959 4.19119 13.6328L9.75759 8.06641L10.0115 7.8125L9.91384 7.48047C9.87512 7.32558 9.87478 7.125 9.87478 6.875C9.87478 4.7687 11.5185 3.125 13.6248 3.125Z"
                fill="#A442F1"
              />
            </svg>
            <h3>Editar reserva</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "2px",
              color: "#E53939",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M5.26648 15.2338C5.59757 15.5649 6.13437 15.5649 6.46546 15.2338L10.5003 11.1989L14.5352 15.2338C14.8663 15.5649 15.4031 15.5649 15.7342 15.2338C16.0653 14.9027 16.0653 14.3659 15.7342 14.0348L11.6993 9.99996L15.7342 5.9651C16.0653 5.63401 16.0653 5.09721 15.7342 4.76612C15.4031 4.43503 14.8663 4.43503 14.5352 4.76612L10.5003 8.80098L6.46546 4.76612C6.13437 4.43503 5.59757 4.43503 5.26648 4.76612C4.93539 5.0972 4.93539 5.63401 5.26648 5.9651L9.30135 9.99996L5.26648 14.0348C4.93539 14.3659 4.93539 14.9027 5.26648 15.2338Z"
                fill="#E53939"
              />
            </svg>
            <Link
              style={{ textDecoration: "none", color: "rgb(229, 57, 57)" }}
              href={`/cancelations/${turn.id}`}
            >
              <h3>Cancelar reserva</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveSuccess;
