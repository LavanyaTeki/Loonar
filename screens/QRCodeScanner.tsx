import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

interface QRCodeScannerProps {
  onClose: () => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({onClose}) => {
  const handleScan = (event: any) => {
    // Handle scanned QR code data
    console.log(event.data);
  };

  const requestCameraPermission = async () => {
    const permission = await check(PERMISSIONS.ANDROID.CAMERA);
    if (permission === RESULTS.GRANTED) {
      // Permission already granted
      return true;
    } else {
      const result = await request(PERMISSIONS.ANDROID.CAMERA);
      if (result === RESULTS.GRANTED) {
        // Permission granted
        return true;
      } else {
        // Permission denied
        return false;
      }
    }
  };

  const renderScanner = () => {
    return (
      <RNCamera
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back} // Ensure you're using the correct camera type
        onBarCodeRead={handleScan} // Ensure the onBarCodeRead event is properly handled
        captureAudio={false} // Ensure audio capture is disabled if not needed
        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]} // Ensure QR code scanning is enabled
      />
    );
  };

  return <View style={styles.centerText}>{renderScanner()}</View>;
};

export default QRCodeScanner;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 12,
    color: '#777',
    marginTop: 20,
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
