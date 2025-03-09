import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Canon EOS R6 Full-Frame Mirrorless Camera</Typography>
        <Typography color={medium}>canon.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      For the everyday shooter with high demands, the Canon EOS R6 is a versatile tool to meet the photo and video requirements of a contemporary imaging workflow. This full-frame mirrorless camera revolves around a refined 20MP CMOS sensor and DIGIC X processor, which afford quick shooting up to 12 fps, apt 4K60 video recording, and wide-ranging sensitivity to ISO 102400. It also sports 5-axis in-body image stabilization to help steady shots when working in low-light conditions.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;