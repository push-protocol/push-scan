import React from 'react';
import Head from 'next/head';
import LoginView from '../../__pages__/login';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Login() {
  return (
    <>
      <Head>
        <title>Admin Login</title>
      </Head>
      <Navbar />
      <LoginView />
      <Footer />
    </>
  );
}
