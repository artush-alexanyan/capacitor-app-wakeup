// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "ArtushNotiVoicePlugin",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "ArtushNotiVoicePlugin",
            targets: ["AutoWakeUpPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "AutoWakeUpPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/AutoWakeUpPlugin"),
        .testTarget(
            name: "AutoWakeUpPluginTests",
            dependencies: ["AutoWakeUpPlugin"],
            path: "ios/Tests/AutoWakeUpPluginTests")
    ]
)