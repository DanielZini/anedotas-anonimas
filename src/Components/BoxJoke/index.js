import React, { useState } from 'react';
import { Alert } from 'react-native';
import * as Cm from './styles';

//api
import api from '../../services/api';

//dependencies
import { format } from 'date-fns';

//Components
import LikeButton from './LikeButton';

export default BoxJoke = props => {

  // recupera dados de props
  const { id, description, likes, dateCreated } = props;

  const [likesNum, setLikesNum] = useState(likes);
  const [processingLike, setProcessingLike] = useState(false);

  //formata data
  const datePost = format(new Date(dateCreated), 'dd/MM/yyyy');

  //like anedota
  const handlerLike = async (id) => {
    setProcessingLike(true);
    try {
      const { data } = await api.put(`posts/${id}/like`);
      setLikesNum(data.likes);
    } catch (err) {
      Alert.alert('Ops, algo deu errado! Tente mais tarde.')
      console.log(err);
    }
    setProcessingLike(false);
  }

  return (
    <Cm.Box>

      <Cm.WrapJoke>
        <Cm.DataPost>
          {datePost}
        </Cm.DataPost>

        <Cm.Line>{description}</Cm.Line>

      </Cm.WrapJoke>

      <Cm.WrapLikes>

        <Cm.BoxNumLikes>
          <Cm.NumLikes>
            {likesNum}
          </Cm.NumLikes>
          <Cm.TextLikes>
            risos
            </Cm.TextLikes>
        </Cm.BoxNumLikes>

        <Cm.BoxButton>
          <LikeButton onPress={() => handlerLike(id)} processingLike={processingLike} />
        </Cm.BoxButton>

      </Cm.WrapLikes>

    </Cm.Box>
  )
}