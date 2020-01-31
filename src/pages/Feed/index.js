import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';
import * as Cm from './styles';

//api
import api from '../../services/api';

//components
import BoxJoke from '../../Components/BoxJoke';
import FloatButton, { Offset } from '../../Components/FloatButton';

//images
import logo from '../../assets/img/logo.png';

export default Feed = props => {

  const [anedotas, setAnedotas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const { navigation } = props;

  //lista anedotas
  const listAnedotas = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get('posts');
      setAnedotas(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }

  //monta componente
  useEffect(() => {
    listAnedotas();
  }, []);

  //atualiza lista de anedotas
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setIsLoading(true);

    listAnedotas().then(() => setRefreshing(false));
  }, [refreshing]);


  return (
    <>
      <Cm.Container
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >

        <Cm.Logo source={logo} />

        <Cm.Content>

          {isLoading ?
            <ActivityIndicator size="large" color="#000" />
            :
            anedotas.length > 0 ?
              anedotas.map((item, index) => {
                return (
                  <BoxJoke
                    key={index}
                    id={item._id}
                    description={item.description}
                    likes={item.likes}
                    dateCreated={item.createdAt} />
                )
              })
              :
              <>
                <Cm.ReturnMsg>Sem Anedotas no momento :/</Cm.ReturnMsg>
                <Cm.ReturnMsg>Comece criando uma utilizando o botão "+" abaixo!</Cm.ReturnMsg>
              </>
          }

        </Cm.Content>

        <Offset />
      </Cm.Container>
      <FloatButton onPress={() => navigation.navigate('NewPost', {
        onGoBack: () => listAnedotas(),
      })} />
    </>
  );
}