import React from 'react';
import styled from 'styled-components'
import { InnerScreen } from '../../styles/atoms';
import ProfileForm from './ProfileForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfileEditPage = () => {
  return (
    <InnerScreen>
      <Container>
        <ProfileForm />
      </Container>
    </InnerScreen>
  );
}

export default ProfileEditPage;