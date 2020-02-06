import React from "react";
import Head from "next/head";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <title>Guest House Coral</title>
        <link rel="icon" href="https://coral-anapa.ru/favicon.ico" />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="row">
            <div className="col">
              <Link href="/">
                <a className="navbar-brand">Гостевой дом "Коралл"</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
