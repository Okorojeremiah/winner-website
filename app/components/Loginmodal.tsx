import React, { useState } from 'react';
import Modal from 'react-modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
}

const LoginModal: React.FC<Props> = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(email, password);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="bg-black rounded-lg p-5 max-w-md mx-auto relative text-black mt-32">
      <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2">Close</button>
      <h2 className="text-white text-2xl mb-5">Welcome</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 rounded text-black"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 rounded text-black"
      />
      <button onClick={handleLogin} className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer">Login</button>
    </Modal>
  );
};

export default LoginModal;
