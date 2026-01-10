import { createContext, useContext, useState, useEffect } from 'react';

const ReservationsContext = createContext();

export const useReservations = () => {
  const context = useContext(ReservationsContext);
  if (!context) {
    throw new Error('useReservations must be used within ReservationsProvider');
  }
  return context;
};

export const ReservationsProvider = ({ children }) => {
  const [reservations, setReservations] = useState(() => {
    const saved = localStorage.getItem('hotelReservations');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('hotelReservations', JSON.stringify(reservations));
  }, [reservations]);

  const addReservation = (reservation) => {
    const newReservation = {
      id: Date.now().toString(),
      ...reservation,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };
    setReservations((prev) => [newReservation, ...prev]);
    return newReservation;
  };

  const updateReservationStatus = (id, status) => {
    setReservations((prev) =>
      prev.map((res) => (res.id === id ? { ...res, status } : res))
    );
  };

  const deleteReservation = (id) => {
    setReservations((prev) => prev.filter((res) => res.id !== id));
  };

  const getReservationById = (id) => {
    return reservations.find((res) => res.id === id);
  };

  return (
    <ReservationsContext.Provider
      value={{
        reservations,
        addReservation,
        updateReservationStatus,
        deleteReservation,
        getReservationById,
      }}
    >
      {children}
    </ReservationsContext.Provider>
  );
};

