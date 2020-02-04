import React, { useState } from 'react';
import { Alert } from 'react-native';
import * as Cm from './styles';

//api
import api from '../../services/api';

//components
import Textarea from '../../Components/Textarea';
import Button from '../../Components/Button';

export default NewPost = props => {

  const [anedota, setAnedota] = useState('');
  const [isSending, setIsSending] = useState(false);

  const { navigation } = props;


  const handlerPost = async () => {

    if (anedota !== '') {
      try {

        await api.post('posts', { description: anedota });
        navigation.state.params.onGoBack();
        navigation.goBack();

      } catch (err) {

        Alert.alert('Ops, algo deu errado! Tente mais tarde.')
        console.log(err);
      }
    } else {
      Alert.alert('Parado ai!', 'O campo de anedotas esta vazio.')
    }

  }

  return (
    <Cm.Container>
      <Cm.Content>

        <Cm.Label>Diga algo engraçado... ou não...</Cm.Label>
        <Textarea
          multiline={true}
          numberOfLines={15}
          placeholder="Insira aqui sua Anedota"
          value={anedota}
          onChangeText={setAnedota} />

        <Button title="Postar" onPress={() => handlerPost()} isSending={isSending} />

      </Cm.Content>
    </Cm.Container>
  )
}