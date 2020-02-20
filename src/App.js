import React from 'react';
import { Flex, Box } from '@avvent/react-layouts';

function App() {
  return (
    <Flex
      flow={{
        direction: 'column'
      }}
      style={{
        minHeight: '100vh',
        backgroundColor: '#FAFAFA',
      }}
    >
      <Box
        style={{
          width: '100%'
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontFamily: 'Arial'
          }}
        >
          Website Coming Soon!
        </h1>
      </Box>

      <Box
        flex={{
          grow: 1
        }}
        
        style={{
          width: '100%',
          position: 'relative',
        }}
      >
        <img
          src={require('./static/ADDVERT FACEBOOK OPENING.jpg')}
          alt='Ad for the boardroom'
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            padding: 20,
            objectFit: 'contain'
          }}
        />
      </Box>
    </Flex>
  );
}

export default App;
