import MediaQuery from "react-responsive";
import styled, { keyframes } from 'styled-components';
import classes from './scss/HomeOpen.module.scss'

export const HomeOpen = () => {

    const boundanim = keyframes`
    0%,100% {top: 0;transform: scale(1);}
    30% {top: -25%;}
    50% {transform: scale(1);}
    90% {top: 0;transform: scale(1.2,0.8);}
  `;

  const Container = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    margin-top: 25vh;
  `;

  const Container2 = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    margin-left: -80px;
  `;

  const Bound = styled.p`
    span {
      font-family: "M PLUS Rounded 1c", sans-serif;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 50px;
      margin: auto;
      font-family: 'Montserrat Subrayada', sans-serif;
      font-size: 7em;
      font-weight: 600;
      color: #555;
      text-align: center;
      width: 400px;
      height: 10px;
      &:nth-child(1) {
        left: -3.3em;
        animation: ${boundanim} 0.8s 0s infinite;
      }
      &:nth-child(2) {
        left: -1.5em;
        animation: ${boundanim} 0.8s 0.1s infinite;
      }
      &:nth-child(3) {
        left: 0em;
        animation: ${boundanim} 0.8s 0.2s infinite;
      }
      &:nth-child(4) {
        left: 1.5em;
        animation: ${boundanim} 0.8s 0.3s infinite;
      }
      &:nth-child(5) {
        left: 3em;
        animation: ${boundanim} 0.8s 0.4s infinite;
      }

      &:nth-child(6) {
        left: 4.5em;
        animation: ${boundanim} 0.8s 0.5s infinite;
      }

      &:nth-child(7) {
        left: 6em;
        animation: ${boundanim} 0.8s 0.6s infinite;
      }

      &:nth-child(8) {
        left: 7.5em;
        animation: ${boundanim} 0.8s 0.7s infinite;
      }

      &:nth-child(9) {
        left: 9em;
        animation: ${boundanim} 0.8s 0.8s infinite;
      }

      &:nth-child(10) {
        left: 10.5em;
        animation: ${boundanim} 0.8s 0.9s infinite;
      }

    }
  `;

    return (
        <>
            <div className={classes.shutter}>
                <Container>
                    <Bound>
                        <span>H</span>
                        <span>I</span>
                        <span>R</span>
                        <span>O</span>
                        <span>'</span>
                        <span>s</span>
                    </Bound>
                </Container>
                <Container2>
                    <Bound>
                        <span>P</span>
                        <span>O</span>
                        <span>R</span>
                        <span>T</span>
                        <span>F</span>
                        <span>O</span>
                        <span>L</span>
                        <span>I</span>
                        <span>O</span>
                    </Bound>
                </Container2>

            </div>
        </>
    );
}