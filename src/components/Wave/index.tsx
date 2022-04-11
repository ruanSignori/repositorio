/* eslint-disable react/require-default-props */
import { WaveComponent } from "./style";

type WaveProps = {
  firstWave?: boolean;
  secundWave?: boolean;
};

export function Wave({ firstWave, secundWave }: WaveProps): JSX.Element {
  return (
    <WaveComponent>
      {firstWave && (
        <svg
          style={{ marginBottom: "-15px" }}
          width="1920"
          height="150"
          viewBox="0 0 1920 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 27.2379L80 20.4604C160 13.1714 320 0.383632 480 0C640 0.383632 800 13.1714 960 40.9207C1120 68.1586 1280 109.079 1440 109.079C1600 109.079 1760 68.1586 1840 47.6982L1920 27.2379V150H1840C1760 150 1600 150 1440 150C1280 150 1120 150 960 150C800 150 640 150 480 150C320 150 160 150 80 150H0V27.2379Z" />
        </svg>
      )}

      {secundWave && (
        <svg
          style={{ marginTop: "-15px" }}
          width="1920"
          height="150"
          viewBox="0 0 1920 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1920 122.762L1840 129.54C1760 136.829 1600 149.616 1440 150C1280 149.616 1120 136.829 960 109.079C800 81.8414 640 40.9207 480 40.9207C320 40.9207 160 81.8414 79.9999 102.302L-5.72205e-05 122.762V-1.04148e-06H79.9999C160 -1.04148e-06 320 -1.04148e-06 480 -1.04148e-06C640 -1.04148e-06 800 -1.04148e-06 960 -1.04148e-06C1120 -1.04148e-06 1280 -1.04148e-06 1440 -1.04148e-06C1600 -1.04148e-06 1760 -1.04148e-06 1840 -1.04148e-06H1920V122.762Z" />
        </svg>
      )}
    </WaveComponent>
  );
}
