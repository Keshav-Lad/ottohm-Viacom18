import React from 'react';
import Sidebar from '../component/common/sidebar';
import Navbar from '../component/common/navbar';

const Index=({children})=> {
  return (
    <div>
            <Sidebar>
            <Navbar/>
            <main>{children}</main>
            </Sidebar>
    </div>
  );
};
export default Index;
