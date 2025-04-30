import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 1rem 2rem;
  background: ${({ type }) => (type === 'error' ? '#ff4444' : '#00C851')};
  color: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  animation: ${slideIn} 0.3s ease-out, ${fadeOut} 0.5s 2.5s forwards;
  z-index: 1000;
`;

const Toast = ({ show, message, type }) => {
  if (!show) return null;
  return <ToastContainer type={type}>{message}</ToastContainer>;
};

export default Toast;
