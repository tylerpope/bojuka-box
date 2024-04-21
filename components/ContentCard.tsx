import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, Pressable, ImageBackground } from 'react-native';

import { ColorKey } from '~/types/global';
import { getColors } from '~/utils/card';

export type ContentCard = {
  id: number;
  title: string;
  backgroundImage?: string;
  colors?: ColorKey[];
};

export default function ContentCardView({ data }: { data: ContentCard }) {
  const {
    backgroundImage = 'https://cards.scryfall.io/art_crop/front/0/e/0efec118-ed01-42a0-93b4-f9a92c01b72e.jpg?1712354928',
    title,
    colors,
  } = data;
  const { background = ['#999', '#999'], icons } = getColors(colors);

  return (
    <View style={styles.wrap}>
      <View style={styles.foreground}>
        <Pressable>
          <ImageBackground
            resizeMode="cover"
            style={styles.foregroundImage}
            source={{
              uri: backgroundImage,
            }}>
            {title && <Text style={styles.title}>{title}</Text>}
            {colors && (
              <View style={styles.colorIconWrap}>
                {icons && icons.map((Icon, i) => <Icon style={styles.colorIcon} key={i} />)}
              </View>
            )}
            <View
              style={{
                ...styles.backgroundImageCover,
                backgroundColor: backgroundImage
                  ? styles.backgroundImageCover.backgroundColor
                  : 'rgb(0,0,0)',
              }}
            />
          </ImageBackground>
        </Pressable>
      </View>
      {background && (
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.background}
          colors={background}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 100,
    margin: 15,
  },
  foregroundImage: {
    height: '100%',
    resizeMode: 'cover',
  },
  foreground: {
    zIndex: 2,
    backgroundColor: '#FFF',
    flex: 1,
    width: '100%',
    overflow: 'hidden',
  },
  backgroundImageCover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: '#FFF',
    margin: 15,
    zIndex: 2,
  },
  background: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    top: 5,
    left: 5,
  },
  colorIconWrap: {
    zIndex: 4,
    position: 'absolute',
    right: 10,
    bottom: 10,
    flexDirection: 'row',
  },
  colorIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
});
