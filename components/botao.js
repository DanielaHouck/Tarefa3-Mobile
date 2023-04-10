import { Button, StyleSheet, View } from 'react-native'

export default comp => {
    return (
        <>
        <View style={styles.container}> 
            <View style={styles.conteudo}>
                <View>
                    <Button style={styles.itens} title='/' ></Button>
                    <Button style={styles.itens} title='7' ></Button>
                    <Button style={styles.itens} title='4' ></Button>
                    <Button style={styles.itens} title='1' ></Button>
                </View>
                <View>
                    <Button style={styles.itens} title='+' ></Button>
                    <Button style={styles.itens} title='8' ></Button>
                    <Button style={styles.itens} title='5' ></Button>
                    <Button style={styles.itens} title='2' ></Button>
                </View>   
                <View> 
                    <Button style={styles.itens} title='*' ></Button>
                    <Button style={styles.itens} title='9' ></Button>
                    <Button style={styles.itens} title='6' ></Button>
                    <Button style={styles.itens} title='3' ></Button>
                </View>
            </View>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    conteudo: {
        flex: 1,
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 100,
        marginTop: 100,
    },

  });