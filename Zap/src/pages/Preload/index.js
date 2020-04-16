import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, CommonActions } from '@react-navigation/native';

import { checkLogin } from '../../actions/AuthActions';
import { styles } from './styles';
import { useEffect } from 'react';

export default function Preload() {

  const status = useSelector(state => state.auth.status);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin());
  })

  useEffect(() => {
    if (status) {
      redirect('Chat');
    } else {
      redirect('Home');
    }
  }, status);

  function redirect(page) {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [ { name: page } ]
      })
    );
  }

  return (
    <View style={styles.container}>
      <Image source={ require('../../../assets/icon/icon.png') } style={style.logo} />
    </View>
  );
}
