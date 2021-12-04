import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'media/logo_blue.png';
import { useAuth } from 'context/authContext';
// import PrivateComponent from './PrivateComponent';

const SidebarLinks = () => {
  return (
    <ul className='mt-12'>
      <SidebarRoute to='' title='Inicio' icon='fas fa-home' />
      {/* <PrivateComponent roleList={['ADMINISTRADOR']}> */}
      <SidebarRoute to='/users' title='Usuarios' icon='fas fa-users' />
      {/* </PrivateComponent> */}
      <SidebarRoute to='/projects/leader' title='Proyectos L' icon='fas fa-file-invoice' />
      <SidebarRoute to='/projects/admin' title='Proyecto A' icon='fas fa-file-invoice' />
      <SidebarRoute to='/projects/student' title='Proyectos E' icon='fas fa-file-invoice' />
      <SidebarRoute to='/registrations' title='Inscripciones' icon='far fa-address-card' />
      <SidebarRoute to='/progresses' title='Avances' icon='fas fa-tasks' />
      <Logout />
    </ul>
  );
};

const Logout = () => {
  const { setToken } = useAuth();
  const deleteToken = () => {
    console.log('eliminar token');
    setToken(null);
  };
  return (
    <li onClick={() => deleteToken()}>
      <NavLink to='/auth/login' className='sidebar-route text-blue-700 hover:text-indigo-900'>
        <div className='flex items-center'>
          <i className='fas fa-sign-out-alt' />
          <span className='text-sm  ml-2'>Cerrar Sesión</span>
        </div>
      </NavLink>
    </li>
  );
};
const Logo = () => {
  return (
    <div className='py-3 w-full flex flex-col items-center justify-center'>
      <img src={logo} alt='Logo' className='h-32' />
      <span className='my-2 text-4xl font-bold text-center text-blue-400'>Proyecta</span>
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex flex-col md:flex-row flex-no-wrap md:h-full'>
      {/* Sidebar starts */}
      <div className='sidebar hidden md:flex'>
        <div className='px-8'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
      <div className='flex md:hidden w-full justify-between bg-gray-800 p-2 text-white'>
        <i className={`fas fa-${open ? 'times' : 'bars'}`} onClick={() => setOpen(!open)} />
        <i className='fas fa-home' />
      </div>
      {open && <ResponsiveSidebar />}
      {/* Sidebar ends */}
    </div>
  );
};

const ResponsiveSidebar = () => {
  return (
    <div>
      <div
        className='sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out'
        id='mobile-nav'
      >
        <div className='px-8'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
};

const SidebarRoute = ({ to, title, icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'sidebar-route text-white bg-blue-600'
            : 'sidebar-route text-gray-900 hover:text-white hover:bg-indigo-400'
        }
      >
        <div className='flex items-center'>
          <i className={icon} />
          <span className='text-sm  ml-2'>{title}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default Sidebar;
