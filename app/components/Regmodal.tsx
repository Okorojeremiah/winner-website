import React, { useState } from 'react';
import Modal from 'react-modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onReg: (email: string, password: string) => void;
}

const RegModal: React.FC<Props> = ({ isOpen, onClose, onReg }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleReg = () => {
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    onReg(email, password);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="bg-black rounded-lg p-5 max-w-md mx-auto relative text-white mt-32">
      <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2">Close</button>
      <h2 className="text-white text-2xl mb-5">Hi! Kindly Register</h2>
      {error && <div className="text-red-500 text-sm mb-3">{error}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <button onClick={handleReg} className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer">Register</button>
    </Modal>
  );
};

export default RegModal;
