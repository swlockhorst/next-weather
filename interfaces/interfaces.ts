export interface CurrentWeather {
  alt_ft: number
  alt_m: number
  cloudtotal_pct: number
  dewpoint_c: number
  dewpoint_f: number
  feelslike_c: number
  feelslike_f: number
  humid_pct: number
  lat: number
  lon: number
  slp_in: number
  slp_mb: number
  temp_c: number
  temp_f: number
  vis_desc: string | null
  vis_km: number
  vis_mi: number
  winddir_compass: string
  winddir_deg: number
  windspd_kmh: number
  windspd_kts: number
  windspd_mph: number
  windspd_ms: number
  wx_code: number
  wx_desc: string
  wx_icon: string
}

export interface Geolocation {
  latitude: number
  longitude: number
}
