export function checkAngle(chinLandmark, LShoulder, shoulderMidPoint) {
    if(chinLandmark){

        if (!chinLandmark) {
            throw new Error('Chin landmark is missing.');
        }

        if (!LShoulder || !shoulderMidPoint) {
            // 필수 매개변수가 주어지지 않은 경우 에러를 throw합니다.
            throw new Error('Required parameters are missing.');
        }

        // 턱 2차원 값
        const chinX = chinLandmark.x;
        const chinY = chinLandmark.y;

        // 어깨 중간 점 2차원 값
        const shoulderMidPointX = shoulderMidPoint[0];
        const shoulderMidPointY = shoulderMidPoint[1];

        // 왼쪽 어깨 랜드마크 2차원 값
        const leftShoulderX = LShoulder.x;
        const leftShoulderY = LShoulder.y;

        // 벡터 길이 계산
        const vec1_x = leftShoulderX - shoulderMidPointX;
        const vec1_y = leftShoulderY - shoulderMidPointY;
        const vec2_x = chinX - shoulderMidPointX;
        const vec2_y = chinY - shoulderMidPointY;

        const vec1_length = Math.sqrt(vec1_x ** 2 + vec1_y ** 2);
        const vec2_length = Math.sqrt(vec2_x ** 2 + vec2_y ** 2);

        // 벡터의 길이가 0인지 확인
        if (vec1_length === 0 || vec2_length === 0) {
            throw new Error('Vector length is zero.');
        }

        // 내적(dot product) 계산
        const dot_product = vec1_x * vec2_x + vec1_y * vec2_y;

        // 각도 계산
        const cos_theta = dot_product / (vec1_length * vec2_length);
        
        // acos 함수의 결과가 -1부터 1 사이어야 함
        if (cos_theta < -1 || cos_theta > 1) {
            throw new Error('Invalid cosine value for angle calculation.');
        }

        const angle_rad = Math.acos(cos_theta);
        const angle_deg = (angle_rad * 180) / Math.PI;

        return angle_deg;
    }
}
