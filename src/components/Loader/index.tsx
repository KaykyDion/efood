import { SyncLoader } from "react-spinners";
import { colors } from "../../styles";
import { Container } from "./styles";

export default function Loader() {
  return (
    <Container>
      <SyncLoader color={colors.textPrimary} />
    </Container>
  );
}
