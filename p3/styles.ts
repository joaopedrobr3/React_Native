import { StyleSheet } from 'react-native'


const BLUE = '#2d4fbd'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2a5e',
  },
  header: {
    backgroundColor: '#1a2a5e',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 14,
    marginTop: 20
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  fundo: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  selo :{
   width: 50,
   height: 50,
 },
  cardTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    flexDirection: 'row',
},


  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1c1c1e',
    marginTop: 8,
  },
  valor: {
    fontSize: 13,
    color: '#555',
  },
  row: {
    flexDirection: 'row',
  },
  coluna: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '47.5%',
    paddingVertical: 24,
    alignItems: 'center',
    gap: 10,
    elevation: 2,
  },
  botaoSolo: {
    width: '47.5%',
  },
  botaoTexto: {
    color: BLUE,
    fontWeight: 'bold',
    fontSize: 11,
    textAlign: 'center',
    letterSpacing: 0.3,
  },

  textInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginTop: 12
  }

 

 
})