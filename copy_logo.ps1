Copy-Item -Path "C:\Users\tasuntha\.gemini\antigravity\brain\c79a32f4-9677-4e60-ac4b-1fb4eb2b10ef\media__1770309150746.png" -Destination "d:\Project\PricePulse-Project\frontend\src\assets\logo.png" -Force
Write-Host "Copy command finished."
if (Test-Path "d:\Project\PricePulse-Project\frontend\src\assets\logo.png") {
    Write-Host "SUCCESS: File exists."
} else {
    Write-Host "FAILURE: File not found."
}
